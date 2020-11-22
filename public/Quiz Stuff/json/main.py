import pandas as pd, json
filename=r'stuff.csv'
df=pd.read_csv(filename)
data=[]

for rownum in range(len(df.index)):
    r=df.iloc[rownum]
    data.append({'q':r[1], 'a':r[2], 'a1':r[3], 'a2':r[4], 'a3':r[5], 'd':r[0]})

import numpy as np

class NpEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.integer):
            return int(obj)
        elif isinstance(obj, np.floating):
            return float(obj)
        elif isinstance(obj, np.ndarray):
            return obj.tolist()
        else:
            return super(NpEncoder, self).default(obj)

with open('qanda.json', 'w') as outfile: json.dump(data, outfile, indent=4, cls=NpEncoder)
