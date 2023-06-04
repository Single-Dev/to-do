# Generated by Django 4.2.1 on 2023-06-04 06:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_alter_todo_mark'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='mark',
        ),
        migrations.AlterField(
            model_name='todo',
            name='caption',
            field=models.TextField(blank=True, max_length=200, null=True),
        ),
    ]
