# Generated by Django 3.0.6 on 2020-07-14 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('park_name', models.CharField(default='', max_length=512)),
                ('park_rating', models.IntegerField(default=0)),
            ],
        ),
    ]