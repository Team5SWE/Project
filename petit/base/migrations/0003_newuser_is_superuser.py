# Generated by Django 4.1.1 on 2022-10-23 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_newuser_is_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='newuser',
            name='is_superuser',
            field=models.BooleanField(default=False),
        ),
    ]