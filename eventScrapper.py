from lxml import html
import requests

def format(timelist,namelist,placelist):
    eventlist = []
    for i in range(len(namelist)):
	if timelist[i] == "All Day ":
	   starttime = "12:00 AM"
	   endtime = "12:00 PM"
	else:
	   times = timelist[i].split(" - ")
	   if len(times) < 2:
	       starttime = times[0]
	       endtime = "12:00 AM"
	   else:
	       starttime = times[0]
	       endtime = times[1]
	if placelist[i] == "Science Center":
	   lat = 39.906911
	   lng = 75.355643
	elif placelist[i] == "Kohlberg Hall":
	   lat = 39.905798
	   lng = 75.354950
	elif placelist[i] == "LPAC":
	   lat = 39.906011
	   lng = 75.354950
        else:
	   lat = 39.9068
	   lng = 75.3556 
	event = {"id": i, "name": namelist[i], "start_time": starttime, "end_time": endtime, "location": {"lat": lat, "lng": -lng}, "description": ""}
        eventlist.append(event)
    return eventlist


def locationcleanup(L):
    newL = []
    for i in range(48):
        newL.append('Science Center')
    return newL
    
def timecleanup(L):
    newL = []
    for i in range(len(L)):
        newL.append(L[i])
    return newL
    
def namecleanup(L):
    newL = []
    for i in range(len(L)):
        newL.append(L[i])
    for i,value in enumerate(newL):
        newL[i] = value.strip("u'")
        newL[i] = value.strip("'")
        newL[i] = value.strip(" \u")
    return newL
    
def main():
    page = requests.get('https://calendar.swarthmore.edu/calendar/EventList.aspx?fromdate=12%2f3%2f2016&todate=12%2f9%2f2016&display=Week&view=DateTime')
    tree = html.fromstring(page.content)
    time = tree.xpath('//a[@class="listtext"]/text()')
    name = tree.xpath('//a[@class="url"]/text()')
    #location = tree.xpath('//td[@align="left"][@colspan="2"][@style="width:100%:"]/text()/span/b/text()')
    location = []
    
    location = locationcleanup(location)    
    name = namecleanup(name)
    time = timecleanup(time)
    
    print len(location)
    print len(name)
    print len(time)
    
    x = format(time,name,location)
    print x
    return x
    
    
if __name__ == "__main__":
    main()