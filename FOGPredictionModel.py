"""

The following program was an entry into a Kaggle competition - Hosted by the Michal J. Fox Foundation.

The goal of this competition was to develop a machine learning model trained on data collected from a wearable 
3D lower back sensor to detect freezing of gait (FOG), a debilitating symptom that afflicts many people with 
Parkinson's disease. FOG has a negative impact on health-related quality of life, and the ability to objectively 
and accurately quantify FOG is important for understanding and treating it. The competition data was collected by 
three research groups, and the competition host aims to improve the personalized treatment of 
age-related movement, cognition, and mobility disorders. 

This a cause I am interested in = Data Sciene + Medical Research.

Therefore, I drafted this LGBM model. 
Even though it did not win - it contributed towards a good cause and it helped develop my skill.  


"""

import pandas as pd
import numpy as np
import glob

def reduce_memory_usage(df):
    
    # Check if input is a Pandas DataFrame
    if not isinstance(df, pd.DataFrame):
        raise TypeError("Input must be a pandas DataFrame.")
    
    # Calculate the memory usage of the DataFrame before optimization
    start_mem = df.memory_usage(deep=True).sum() / 1024**2
    print('Memory usage of dataframe is {:.2f} MB'.format(start_mem))

    # Loop through each column of the DataFrame
    for col in df.columns:
        col_type = df[col].dtype
        
        # If column is of 'object' type, convert it to 'category'
        if col_type == 'object':
            df[col] = df[col].astype('category')
        
        # If column is a datetime type, leave it as is
        elif col_type.name.startswith('datetime'):
            pass
        
        # For numerical columns, downcast the data type to reduce memory usage
        else:
            c_min = df[col].min()
            c_max = df[col].max()
            
            if col_type == np.int64:
                if c_min > np.iinfo(np.int8).min and c_max < np.iinfo(np.int8).max:
                    df[col] = df[col].astype(np.int8)
                elif c_min > np.iinfo(np.int16).min and c_max < np.iinfo(np.int16).max:
                    df[col] = df[col].astype(np.int16)
                elif c_min > np.iinfo(np.int32).min and c_max < np.iinfo(np.int32).max:
                    df[col] = df[col].astype(np.int32)
                else:
                    df[col] = df[col].astype(np.int64)
            elif col_type == np.float64:
                if c_min > np.finfo(np.float16).min and c_max < np.finfo(np.float16).max:
                    df[col] = df[col].astype(np.float16)
                elif c_min > np.finfo(np.float32).min and c_max < np.finfo(np.float32).max:
                    df[col] = df[col].astype(np.float32)
                else:
                    df[col] = df[col].astype(np.float64)
            else:
                # If column is of any other data type, convert it to 'category'
                df[col] = df[col].astype('category')
    
    # Calculate the memory usage of the DataFrame after optimization
    end_mem = df.memory_usage(deep=True).sum() / 1024**2
    print("Memory usage after optimization is: {:.2f} MB".format(end_mem))
    print("Decreased by {:.1f}%".format(100 * (start_mem - end_mem) / start_mem))

    # Remove intermediate variables to free up memory
    del start_mem, end_mem
    return df.copy()


# specify the root directory containing CSV files
DATA_ROOT_DEFOG = '/kaggle/input/tlvmc-parkinsons-freezing-gait-prediction/train/defog/'

# function to read and concatenate CSV files
def read_csv_files(root):
    
    # get a list of file paths that match the pattern `f"{root}/*.csv"`
    file_paths = glob.glob(f"{root}/*.csv")
    
    # if there are no files that match the pattern, raise an exception
    if not file_paths:
        raise ValueError(f"No CSV files found in {root}")
    
    # read each CSV file and append it to a list
    dfs = []
    for file_path in file_paths:
        df = pd.read_csv(file_path)
        df['file'] = file_path.split('/')[-1].split('.')[0]
        dfs.append(df)
    
    # concatenate all DataFrames in the list into a single DataFrame
    df = pd.concat(dfs, axis=0)
    
    # return the concatenated DataFrame
    return df

# read and concatenate all CSV files using the read_csv_files function
defog = read_csv_files(DATA_ROOT_DEFOG)
defog = reduce_memory_usage(defog)

defog = defog[(defog['Task']==1)&(defog['Valid']==1)]
print('the shape of defog dataset is {}'.format(defog.shape))

defog_metadata = pd.read_csv("/kaggle/input/tlvmc-parkinsons-freezing-gait-prediction/defog_metadata.csv")
defog_metadata

defog_m= defog_metadata.merge(defog, how = 'inner', left_on = 'Id', right_on = 'file')
defog_m.drop(['file','Valid','Task'], axis = 1, inplace = True)
defog_m

# summary table function
def summary(df):
    print(f'data shape: {df.shape}')
    summ = pd.DataFrame(df.dtypes, columns=['data type'])
    summ['#missing'] = df.isnull().sum().values * 100
    summ['%missing'] = df.isnull().sum().values / len(df)
    summ['#unique'] = df.nunique().values
    desc = pd.DataFrame(df.describe(include='all').transpose())
    summ['min'] = desc['min'].values
    summ['max'] = desc['max'].values
    summ['first value'] = df.loc[0].values
    summ['second value'] = df.loc[1].values
    summ['third value'] = df.loc[2].values
    
    return summ
summary(defog_m)

# garbage collection for memory
import gc
gc.collect()

DATA_ROOT_TDCSFOG = '/kaggle/input/tlvmc-parkinsons-freezing-gait-prediction/train/tdcsfog/'
tdcsfog = pd.DataFrame()
for root, dirs, files in os.walk(DATA_ROOT_TDCSFOG):
    for name in files:       
        f = os.path.join(root, name)
        df_list= pd.read_csv(f)
        words = name.split('.')[0]
        df_list['file']= name.split('.')[0]
        tdcsfog = pd.concat([tdcsfog, df_list], axis=0)
tdcsfog

tdcsfog = reduce_memory_usage(tdcsfog)

tdcsfog_metadata = pd.read_csv("/kaggle/input/tlvmc-parkinsons-freezing-gait-prediction/tdcsfog_metadata.csv")
tdcsfog_metadata

tdcsfog_m= tdcsfog_metadata.merge(tdcsfog, how = 'inner', left_on = 'Id', right_on = 'file')
tdcsfog_m.drop(['file'], axis = 1, inplace = True)
tdcsfog_m

# garbage collection for memory
import gc
gc.collect()

conditions = [
    (defog_m['StartHesitation'] == 1),
    (defog_m['Turn'] == 1),
    (defog_m['Walking'] == 1)]
choices = ['StartHesitation', 'Turn', 'Walking']
defog_m['event'] = np.select(conditions, choices, default='Normal')

defog_m['event'].value_counts().to_frame().style.background_gradient()

train_df = defog_m[['AccV','AccML','AccAP','event']]
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()

train_df['target'] = le.fit_transform(train_df['event'])

X = train_df.drop(['event','target'], axis=1)
y = train_df['target']

params={}
params['learning_rate']=0.03
params['boosting_type']='gbdt' #GradientBoostingDecisionTree
params['objective']='multiclass' #Multi-class target feature
params['metric']='multi_logloss' #metric for multi-class
params['max_depth']=7
params['num_class']=4 #no.of unique values in the target class not inclusive of the end value
params['verbose']=-1
#training the model
clf=lgb.train(params,d_train,1000)  #training the model on 1,000 epocs
#prediction on the test dataset
y_pred_1=clf.predict(X_test)

y_pred_1[:1]
# 'macro' option is to calculate metrics for each label, and find their unweighted mean. 
# This does not take label imbalance into account.
from sklearn.metrics import precision_score
precision_score(y_test, np.argmax(y_pred_1, axis=-1), average='macro')
test_defog_path = '/kaggle/input/tlvmc-parkinsons-freezing-gait-prediction/test/defog/02ab235146.csv'
test_defog = pd.read_csv(test_defog_path)
name = os.path.basename(test_defog_path)
id_value = name.split('.')[0]
test_defog['Id_value'] = id_value
test_defog['Id'] = test_defog['Id_value'].astype(str) + '_' + test_defog['Time'].astype(str)
test_defog = test_defog[['Id','AccV','AccML','AccAP']]
test_defog.set_index('Id',inplace=True)
# predict event probability
test_defog_pred=clf.predict(test_defog)
test_defog['event'] = np.argmax(test_defog_pred, axis=-1)

# expand event column it to three columns
test_defog['StartHesitation'] = np.where(test_defog['event']==1, 1, 0)
test_defog['Turn'] = np.where(test_defog['event']==2, 1, 0)
test_defog['Walking'] = np.where(test_defog['event']==3, 1, 0)
test_defog.head(10)
test_tdcsfog_path = '/kaggle/input/tlvmc-parkinsons-freezing-gait-prediction/test/tdcsfog/003f117e14.csv'
test_tdcsfog = pd.read_csv(test_tdcsfog_path)
name = os.path.basename(test_tdcsfog_path)
id_value = name.split('.')[0]
test_tdcsfog['Id_value'] = id_value
test_tdcsfog['Id'] = test_tdcsfog['Id_value'].astype(str) + '_' + test_tdcsfog['Time'].astype(str)
test_tdcsfog = test_tdcsfog[['Id','AccV','AccML','AccAP']]
test_tdcsfog.set_index('Id',inplace=True)
test_tdcsfog_pred=clf.predict(test_tdcsfog)
test_tdcsfog['event'] = np.argmax(test_tdcsfog_pred, axis=-1)
test_tdcsfog['StartHesitation'] = np.where(test_tdcsfog['event']==1, 1, 0)
test_tdcsfog['Turn'] = np.where(test_tdcsfog['event']==2, 1, 0)
test_tdcsfog['Walking'] = np.where(test_tdcsfog['event']==3, 1, 0)
test_tdcsfog.reset_index('Id', inplace=True)


test_tdcsfog.head(10)
submit = pd.concat([test_tdcsfog,test_defog])
submit = submit[['Id', 'StartHesitation', 'Turn','Walking']]
submit.head(10)
sample = pd.read_csv('/kaggle/input/tlvmc-parkinsons-freezing-gait-prediction/sample_submission.csv')
sample.head(10)
