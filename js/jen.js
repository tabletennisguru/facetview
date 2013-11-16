$(document).ready(function() {

  $('.facet-view-simple').facetview({
    // search_url: 'http://ec2-54-201-33-40.us-west-2.compute.amazonaws.com:8080/jen/people/_search',
    search_url: 'http://ec2-54-201-33-40.us-west-2.compute.amazonaws.com:8080/jen/people/_search',	
    search_index: 'elasticsearch',
    facets: [
        {'field':'city', 'display':'City'}, 
		{'field':'state', 'display':'State'},
		{'field':'jk_name', 'display':'Jamatkhana'},
		{'field':'degree', 'display':'Degree'},
		{'field':'major', 'display':'Major'},
		{'field':'occupation', 'display':'Occupation'},
		{'field':'employer', 'display':'Employer'},
		{'field':'industry', 'display':'Industry'},
		{'field':'specialization', 'display':'Specialization'},
		{'field':'languages', 'display':'Language'},												
    ],
    paging: {
      from: 0,
      size: 10
    },
	result_display: [
		[
			{'pre':'ID: ','field':'form_no'},
		],
		[
			{'pre':'<div class="capitalize"><div class="occupation">', 'field':'occupation', 'post':'</div>'},
		],
		[
	    	{'field':'city', 'post':', '},
	    	{'field':'state'}
		],
		[
			{'field': 'employer', 'post':'</div>'}
		]		
	]
  });

  // set up form
  $('.demo-form').submit(function(e) {
    e.preventDefault();
    var $form = $(e.target);
    var _data = {};
    $.each($form.serializeArray(), function(idx, item) {
      _data[item.name] = item.value;
    });
    $('.facet-view-here').facetview(_data);
  });
	
});