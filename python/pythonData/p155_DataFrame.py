from pandas import DataFrame 

sdata = {
    '도시' : ['서울', '서울', '서울', '부산', '부산'],
    '연도' : [2020, 2021, 2022, 2021, 2022],
    '실적' : [150, 170, 360, 240, 290]
}

myindex = ['one', 'two', 'three', 'four', 'five']
myframe = DataFrame(data=sdata, index=myindex)
print('\nType : ', type(myframe))

myframe.columns.name = 'Columns1'
print('\n Columns Infomation')
print(myframe.columns)

myframe.index.name = 'Index1'
print('\n Index Infomation')
print(myframe.index)

print('\n Inner Data Information')
print(type(myframe.values))
print(myframe.values)

print('\nData Type Information')
print(myframe.dtypes)

print('\nContext Information')
print(myframe)

print('\nrow, col Transformation')
print(myframe.T)

print('\nColumns Property Usage')
mycolumns = ['연도', '도시', '실적']
newframe = DataFrame(data=sdata, index=myindex, columns=mycolumns)
print(newframe)