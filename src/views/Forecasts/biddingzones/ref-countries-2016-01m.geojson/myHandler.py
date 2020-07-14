import numpy as np 

# },
#         "type": "Feature",
#         "properties": {
#             "CNTR_NAME": "\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629",
#             "ISO3_CODE": "ARE",
#             "CNTR_ID": "AE",
#             "NAME_ENGL": "United Arab Emirates",
#             "FID": "AE"
#         },
#         "id": "AE"

# src\components\forecasts\biddingzones\ref-countries-2016-01m.geojson\CNTR_RG_01M_2016_4326.geojson

import json
import os 

myList = []

with open("CNTR_RG_01M_2016_4326.geojson") as file_object:
    contents = json.load(file_object)
    features = contents['features']
    
    code = ["ITA", "DEU", "GBR", "FRA", "GRC", "CHE", "NLD", "UKR", "MLT", "POL", "AUT", "ISL", "HRV", "FIN", "CZE", "BEL", "CYP", "ALB", "LUX", "MNE", "HUN", "ROU", "SRB", "MCO", "BGR", "VAT", "BLR", "IRL", "SVN", "RKS", "LTU", "EST", "SVK", "MDA", "LVA", "BIH", "MDK", "RKS", "LTU", "EST", "SVK", "MDA", "LVA", "BIH", "MKD", "AND", "FRO", "LIE", "GIB", "SMR", "IMN", "JEY", "ALA", "SJM"]
    for country in features:
        if country['properties']['ISO3_CODE'] in code:
            myList.append(country.copy())

with open("data.txt", "w") as output_file:
    json.dump(myList, output_file)
