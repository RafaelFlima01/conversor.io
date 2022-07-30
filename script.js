
var res = document.querySelector('#res')

function ValueOption1(){
    var select = document.querySelector("#select-geral1")
    var options = select.options[select.selectedIndex]
    var value = options.value
    return value
}
function ValueOption2(){
    var select = document.querySelector("#select-geral2")
    var options = select.options[select.selectedIndex]
    var value = options.value
    return value
}



function converter(){
    var input = document.querySelector('#input').value;

    if(input == ''){
        return
    }
    
        // Conversão de KM para os demais
    if(ValueOption1() === ValueOption2()){
        res.innerHTML=input+` `+ValueOption1()
    }
    if(ValueOption1() === '(km)' && ValueOption2() === '(m)'){
        var convert = input*1000
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(km)' && ValueOption2() === '(dm)'){
        var convert = input*10000
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(km)' && ValueOption2() === '(cm)'){
        var convert = input*100000
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(km)' && ValueOption2() === '(mm)'){
        var convert = input*1000000
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(km)' && ValueOption2() === '(μm)'){
        var convert = input*1000000000
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }

        // Conversão de M para os demais
    if(ValueOption1() === ValueOption2()){
        res.innerHTML=input+` `+ValueOption1()
    }
    if(ValueOption1() === '(m)' && ValueOption2() === '(km)'){
        var convert = input/1000
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(m)' && ValueOption2() === '(dm)'){
        var convert = input*10
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(m)' && ValueOption2() === '(cm)'){
        var convert = input*100
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(m)' && ValueOption2() === '(mm)'){
        var convert = input*1000
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(m)' && ValueOption2() === '(μm)'){
        var convert = input*1000000
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }

        // Conversão de DM para os demais
    if(ValueOption1() === ValueOption2()){
        res.innerHTML=input+` `+ValueOption1()
    }
    if(ValueOption1() === '(dm)' && ValueOption2() === '(km)'){
        var convert = input/1000
        var convert2 = convert/10
        res.innerHTML=convert2+` `+ValueOption2()
    }
    if(ValueOption1() === '(dm)' && ValueOption2() === '(m)'){
        var convert = input/10
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(dm)' && ValueOption2() === '(cm)'){
        var convert = input*10
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(dm)' && ValueOption2() === '(mm)'){
        var convert = input*100
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(dm)' && ValueOption2() === '(μm)'){
        var convert = input*100000
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }

        // Conversão de CM para os demais
    if(ValueOption1() === ValueOption2()){
        res.innerHTML=input+` `+ValueOption1()
    }
    if(ValueOption1() === '(cm)' && ValueOption2() === '(km)'){
        var convert = input/1000
        var convert2 = convert/100
        res.innerHTML=convert2+` `+ValueOption2()
    }
    if(ValueOption1() === '(cm)' && ValueOption2() === '(m)'){
        var convert = input/100
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(cm)' && ValueOption2() === '(dm)'){
        var convert = input/10
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(cm)' && ValueOption2() === '(mm)'){
        var convert = input*10
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(cm)' && ValueOption2() === '(μm)'){
        var convert = input*10000
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
        // Conversão de MM para os demais
    if(ValueOption1() === ValueOption2()){
        res.innerHTML=input+` `+ValueOption1()
    }
    if(ValueOption1() === '(mm)' && ValueOption2() === '(km)'){
        var convert = input/1000
        var convert2 = convert/1000
        res.innerHTML=convert2+` `+ValueOption2()
    }
    if(ValueOption1() === '(mm)' && ValueOption2() === '(m)'){
        var convert = input/1000
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(mm)' && ValueOption2() === '(dm)'){
        var convert = input/100
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(mm)' && ValueOption2() === '(cm)'){
        var convert = input/10
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
    if(ValueOption1() === '(mm)' && ValueOption2() === '(μm)'){
        var convert = input*1000
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }

        // Conversão de μm para os demais
    if(ValueOption1() === ValueOption2()){
        res.innerHTML=input+` `+ValueOption1()
    }
    if(ValueOption1() === '(μm)' && ValueOption2() === '(km)'){
        res.innerHTML='Incalculável'
    }
    if(ValueOption1() === '(μm)' && ValueOption2() === '(m)'){
        var convert = input/1000
        var convert2 = convert/1000
        res.innerHTML=convert2+` `+ValueOption2()
    }
    if(ValueOption1() === '(μm)' && ValueOption2() === '(dm)'){
        var convert = input/1000
        var convert2 = convert/100
        res.innerHTML=convert2+` `+ValueOption2()
    }
    if(ValueOption1() === '(μm)' && ValueOption2() === '(cm)'){
        var convert = input/100
        var convert2 = convert/100
        res.innerHTML=convert2+` `+ValueOption2()
    }
    if(ValueOption1() === '(μm)' && ValueOption2() === '(mm)'){
        var convert = input/1000
        var convertFormat = (convert).toLocaleString('pt-BR')
        res.innerHTML=convertFormat+` `+ValueOption2()
    }
}

    // Função de reset
function resetar(){
    var input = document.querySelector('#input')
    input.value = ''
    res.innerHTML=''
}
