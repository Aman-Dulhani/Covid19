import requests
from rest_framework.response import Response
from rest_framework.decorators import api_view


URL = 'https://api.covid19india.org/data.json'

@api_view(['GET', ])

def external_api_call(request):   
    if request.method == "GET":
        Covid_status = {'cases_time_series': [], 'statewise': [], 'total': {}}
        r = requests.get(URL).json()
        n = len(r['cases_time_series'])
        for i in range(n-8,n):
            Covid_status['cases_time_series'].append({
                'dailyconfirmed': r['cases_time_series'][i]['dailyconfirmed'],
                'dailydeceased': r['cases_time_series'][i]['dailydeceased'],
                'dailyrecovered': r['cases_time_series'][i]['dailyrecovered'],
                'date': r['cases_time_series'][i]['date']
            })
        n = len(r['statewise'])
        for i in range(n):
            if i==0:
                Covid_status['total'] = r['statewise'][i]
                Covid_status['total']['recrate'] = round((int(r['statewise'][i]['recovered'])/int(r['statewise'][i]['confirmed']))*100,2)
                Covid_status['total']['deathrate'] = round((int(r['statewise'][i]['deaths'])/int(r['statewise'][i]['confirmed']))*100,2)
            else:
                Covid_status['statewise'].append({
                    'state': r['statewise'][i]['state'],
                    'active': r['statewise'][i]['active'],
                    'confirmed': r['statewise'][i]['confirmed'],
                    'deaths': r['statewise'][i]['deaths'],
                    'recovered': r['statewise'][i]['recovered'],
                    "deltaconfirmed": r['statewise'][i]['deltaconfirmed'],
                    "deltadeaths": r['statewise'][i]['deltadeaths'],
                    "deltarecovered": r['statewise'][i]['deltarecovered'],
                })
        return Response(Covid_status)
    