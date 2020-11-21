import pandas as pd, json
filename=r'stuff.csv'
df=pd.read_csv(filename)
data=[]

for rownum in range(len(df.index)):
    r=df.iloc[rownum]
    data.append({'q':r[0], 'a':r[1], 'a1':r[2], 'a2':r[3], 'a3':r[4]})

with open('qANDa.json', 'w') as outfile: json.dump(data, outfile, indent=4)
