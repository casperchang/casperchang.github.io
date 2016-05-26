#!/usr/bin/python
# -*- coding: utf-8 -*-
#
import io, json
import sys
import pandas as pd
from pandas import DataFrame, Series

if __name__ == '__main__':
	# create pd
	df = DataFrame(columns = ['date', 'title', 'article', 'tag', 'path'])

	# manually append sameple data for formating
	df.loc[0] = ['20151205', 'article01', 'shall we start', ['cloud', 'sky'], './images/01.png']
	df.loc[1] = ['20151206', 'article02', '中文測試', ['test'], './images/02.png']
	df.loc[2] = ['20151207', 'article03', '這是文章', ['01', '02', '天空'], './images/03.png']

	# df to json
	j = json.loads(df.to_json(orient='index'))
	# j = {}
	# for i in df.index:
	# 	j[str(i)] = df.iloc[i].values.tolist()

	print j

	# save into indented json
	outpath = './data/imgList_output.json'
	with io.open(outpath, 'w', encoding = 'utf-8') as outfile:
		outfile.write(unicode(json.dumps(j, sort_keys = True, indent=4, ensure_ascii=False)))

