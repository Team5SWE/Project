# Generated by Django 4.1.1 on 2022-10-02 06:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_address_zip'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='zip',
            field=models.CharField(default=None, max_length=5),
        ),
    ]
