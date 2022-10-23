import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pickle
import warnings
warnings.filterwarnings('ignore')


data = pd.read_csv('model/hardiness_zone.csv', na_values='---')
features = data[['humidity', 'temp','dew','solar']]
target = data['zone']
Xtrain, Xtest, Ytrain, Ytest = train_test_split(features,target,test_size = 0.2,random_state =2)
RF = RandomForestClassifier(n_estimators=20, random_state=0)
RF.fit(Xtrain,Ytrain)
pickle.dump(RF, open('zone.pkl', 'wb'))
loaded_model = pickle.load(open('zone.pkl', 'rb'))

