var pullRequest = (search) => {
    $.ajax({
        url: `https://www.loc.gov/search/?q=${search}&fo=json`,
        method: 'GET',
    }).then(function (response) { })
}