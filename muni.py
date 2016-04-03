import urllib2

response = urllib2.urlopen("http://services.my511.org/Transit2.0/GetNextDeparturesByStopCode.aspx?token=db0ca4ba-fad8-40a0-9bb3-fd76564a83a9&stopcode=14270")
html = response.read()

print html