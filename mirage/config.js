export default function() {
  this.namespace = '/api';

  this.post('/authors', function (db, request) {
    var attrs = JSON.parse(request.requestBody).data;
    var author = db.authors.create(attrs);
    return author;
  });

  this.get('/authors', function(db, request) {
    var array_value = [], data, return_value;
    if(request.queryParams.name !== undefined || request.queryParams.address !== undefined || request.queryParams.phonenumber !== undefined) {
      array_value = db.authors.where(request.queryParams).models;
    } else {
      array_value = db.authors.all().models;
    }
    data = array_value.map((item) => {
      return_value = {type: 'author', id: item.id, attributes: item};
      return return_value;
    });
    return { data };
  });

  this.patch('/authors/:id', function (db, request) {
    var id = request.params.id;
    var updateObject = db.authors.find(id);
    updateObject.update();
  });

  this.del('/authors/:id', function (db, request) {
    var del_id = request.params.id;
    var deleteObject = db.authors.find(del_id);
    deleteObject.destroy();
  });

}
