export function selectMunicipiosPorDep(departamento) {

    $('#list-ciudad').empty();
    $.getJSON("https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=" + departamento, function (result) {
        $.each(result, function (i, field) {
            $('#list-ciudad').append($('<option>', {
                value: field.municipio,
                text: field.municipio
            }));
        });

    });

}

export function selectDepartamentos() {

    $.getJSON("https://www.datos.gov.co/resource/xdk5-pm3f.json?$query=select distinct departamento", function (result) {
        $.each(result, function (i, field) {
            $('#list-departamento').append($('<option>', {
                value: field.departamento,
                text: field.departamento
            }));
        });
    });
    $("#list-departamento")[0].selectedIndex = 0;
}