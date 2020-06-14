from rest_framework.generics import ListAPIView
import requests
from .serializers import Covid19Serializer
from covid19.models import Covid19

class Covid19ListView(ListAPIView):   
    url = 'https://api.covid19india.org/data.json'
    r = requests.get(url).json()
    n = len(r['statewise'])
    if len(Covid19.objects.all())==0:
        for i in range(1,n):    
            Covid19.objects.create(
                State = r['statewise'][i]['state'],
                Confirmed= r['statewise'][i]['confirmed'],
                Deaths= r['statewise'][i]['deaths'],
                Recovered = r['statewise'][i]['recovered'],
                Active= r['statewise'][i]['active'],
            )
    else:    
        for i in range(1,n):    
            Covid19.objects.filter(
                State = r['statewise'][i]['state'],
            ).update(
                Confirmed= r['statewise'][i]['confirmed'],
                Deaths= r['statewise'][i]['deaths'],
                Recovered = r['statewise'][i]['recovered'],
                Active= r['statewise'][i]['active'],
            )
    queryset = Covid19.objects.all()
    serializer_class = Covid19Serializer