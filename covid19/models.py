from django.db import models


class Covid19(models.Model):
    State = models.CharField(max_length=30,default=None, null=True)
    Confirmed = models.IntegerField(default=None, null= True)
    Deaths = models.IntegerField(default=None, null=True)
    Recovered = models.IntegerField(default=None, null=True)
    Active = models.IntegerField(default=None, null=True)
    DeltaConfirmed = models.IntegerField(default=None, null=True)
    DeltaDeaths = models.IntegerField(default=None, null=True)
    DeltaRecovered = models.IntegerField(default=None, null=True)
    
    def __str__(self):
        return self.State