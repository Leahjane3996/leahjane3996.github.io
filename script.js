var data = {
labels: [
"Yes",
"Maybe",
"No"
],
datasets: [{
data: [15, 4, 2],
backgroundColor: [
"#FF6384",
"#36A2EB",
"#FFCE56"
],
hoverBackgroundColor: [
"#FF6384",
"#36A2EB",
"#FFCE56"
]

// For a pie chart


var ctx = document.getElementById("myPieChart").getContext('2d');
var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: options
  });

</script>
