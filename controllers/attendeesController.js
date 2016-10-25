// DATABASE - hard-coded data of attendees

attendees = [
      {
        "name": "Sanders Riley",
        "company": "Comtext",
        "email": "sandersriley@comtext.com",
        "registered": "2015-05-24T02:15:04 +07:00"
      },
      {
        "name": "Bean Cline",
        "company": "Utarian",
        "email": "beancline@utarian.com",
        "registered": "2015-06-21T02:54:39 +07:00"
      },
      {
        "name": "Alfreda Mitchell",
        "company": "Dreamia",
        "email": "alfredamitchell@dreamia.com",
        "registered": "2015-09-22T06:35:29 +07:00"
      },
      {
        "name": "Ashley Vargas",
        "company": "General Assembly",
        "email": "ashleyv@ga.com",
        "registered": "2015-05-24T02:15:04 +07:00"
      },
      {
        "name": "Catherine Lin",
        "company": "Apple",
        "email": "cat@apple.com",
        "registered": "2015-06-21T02:54:39 +07:00"
      },
      {
        "name": "Michelle Gunn",
        "company": "Dreamia",
        "email": "michelle@dreamia.com",
        "registered": "2015-09-22T06:35:29 +07:00"
      },
      {
        "name": "Christine Cate",
        "company": "Ramona",
        "email": "christinecate@ramona.com",
        "registered": "2015-06-21T02:54:39 +07:00"
      },
      {
        "name": "Manuel Garcia",
        "company": "Comcast",
        "email": "manualg@comcast.com",
        "registered": "2015-09-22T06:35:29 +07:00"
      }
    ]

// GET /api/attendees

function index(req, res) {
  res.json(attendees);
}

module.exports = {
  index: index
};