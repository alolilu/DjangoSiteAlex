from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse
from .forms import *
from .models import File


# Create your views here.
@login_required(login_url='login')

def workflow(request):
    form = NewFile(request.POST or None)
    if request.method == 'POST':
        form.save()

        if request.method == 'POST':
            f_name = request.POST.get('f_name')
            s_name = request.POST.get('s_name')
            mail = request.POST.get('mail')
            file = request.FILES['file']

            data = {
                'f_name': f_name,
                's_name': s_name,
                'mail': mail,
                'file': file,
            }

            message = '''
                New customer: {} {}

                Hello,
                Here the message with a folder of our customer.
                Thank you for taking care of it.
                Click on the link for send your verdict:
                http://127.0.0.1:8000/workflow/workrep
                Have nice day

                His folder: {}

                From: {}
                '''.format(data['f_name'],data['s_name'], data['file'], data['mail'])
            send_mail(data['f_name'], message, '', ['alexis.fredriksen5@gmail.com'])

    context = {'form': form}

    return render(request, 'workflow/workflow.html', context)

@login_required(login_url='login')


def workrep(request):
    Files=File.objects.latest('id')
    contextt={'Files':Files}

    if request.method == 'POST':
        verdict = request.POST.get('verdict')

        data1 = {
            'verdict': verdict,
        }

        message = '''
        
        Hello,
        Here the answer about the folder of our customer.
        His verdict : {}
        if you want to return on site :
        http://127.0.0.1:8000/workflow/final
        
        Have nice day
        
        '''.format(data1['verdict'])
        send_mail(data1['verdict'], message, '', ['alexis.fredriksen5@gmail.com'])

    return render(request, 'workflow/workrep.html', contextt)


def workfinal(request):
    Files=File.objects.latest('id')
    contextt={'Files':Files}

    if request.method == 'POST':
        comment = request.POST.get('comment')

        data2 = {
            'comment': comment,
        }

        message = '''
        
        Hello,
        Here the comment to the folder of our customer : 
        My comment : {}
        if you want to return on site :
        http://127.0.0.1:8000/
        
        Have nice day
        
        '''.format(data2['comment'])
        send_mail(data2['comment'], message, '', ['alexis.fredriksen5@gmail.com'])

    return render(request, 'workflow/final.html', contextt)




