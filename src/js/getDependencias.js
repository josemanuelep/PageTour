
var selected;
var combo;

$(document).ready(function () {
    getDependencias();
    selectDepartamentos();

    setTimeout(function() {
        combo = document.getElementById("list-departamento");
        selected = combo.options[combo.selectedIndex].text;
        selectMunicipiosPorDep(selected);
    }, 1000, "JavaScript");

    $("#list-departamento").change(function() {
        combo = document.getElementById("list-departamento");
        selected = combo.options[combo.selectedIndex].text;
        selectMunicipiosPorDep(selected);
    });
});
function getDependencias() {

    $.getJSON("https://www.datos.gov.co/resource/ej2u-8crb.json?$select=institucion", function (result) {
        $.each(result, function (i, field) {
            $('#list-dependencias').append($('<option>', {
                value: i,
                text: field.institucion
            }));
        });
    });

}

function selectMunicipiosPorDep(departamento) {

    $('#list-ciudad').empty();
    $.getJSON("https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=" + departamento, function(result) {
        $.each(result, function(i, field) {
            $('#list-ciudad').append($('<option>', {
                value: field.municipio,
                text: field.municipio
            }));
        });

    });

}

function selectDepartamentos() {

    $.getJSON("https://www.datos.gov.co/resource/xdk5-pm3f.json?$query=select distinct departamento", function(result) {
        $.each(result, function(i, field) {
            $('#list-departamento').append($('<option>', {
                value: field.departamento,
                text: field.departamento
            }));
        });
    });
    $("#list-departamento")[0].selectedIndex = 0;
}