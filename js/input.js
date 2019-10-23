fetch("./homedetails.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        var papgetitle = document.getElementById('pagetitle');
        pagetitle.innerHTML = data.pagetitle;
        var topic = document.getElementById('topic');
        topic.innerHTML = data.topic;
        var description = document.getElementById('description');
        description.innerHTML = data.description;
        var objective = document.getElementById('objective');
        objective.innerHTML = data.objective.join(" ");
    })

    Promise.all([
        fetch('./publications.txt').then(x => x.text())
      ]).then(([sampleResp]) => {
        var publication = document.getElementById('publications');
        publication.innerHTML = sampleResp;
      });   