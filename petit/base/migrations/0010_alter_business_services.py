# Generated by Django 4.1.1 on 2022-10-22 03:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0009_rename_services_service_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='business',
            name='services',
            field=models.TextField(),
        ),
    ]