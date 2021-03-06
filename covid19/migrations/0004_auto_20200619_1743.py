# Generated by Django 3.0.6 on 2020-06-19 12:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('covid19', '0003_auto_20200601_0237'),
    ]

    operations = [
        migrations.AddField(
            model_name='covid19',
            name='DeltaConfirmed',
            field=models.IntegerField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='covid19',
            name='DeltaDeaths',
            field=models.IntegerField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='covid19',
            name='DeltaRecovered',
            field=models.IntegerField(default=None, null=True),
        ),
    ]
