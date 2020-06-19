from rest_framework import serializers
from covid19.models import Covid19


class Covid19Serializer(serializers.ModelSerializer):
    class Meta:
        model = Covid19
        fields = ('State', 'Active', 'Confirmed','Recovered', 'Deaths','DeltaConfirmed','DeltaDeaths','DeltaRecovered')