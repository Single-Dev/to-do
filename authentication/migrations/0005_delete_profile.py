# Generated by Django 4.2.1 on 2023-06-01 11:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0004_alter_customuser_options'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Profile',
        ),
    ]
