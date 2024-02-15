const display = document.getElementById("display")

function addToDisplay(input) 
{
    display.value += input
}

function clearDisplay(type) 
{
    if (type === 'C') 
    {
        display.value = ""
    } 
    else if (type === 'Backspace') 
    {
        display.value = display.value.slice(0, -1)
    }
}

function calculate() 
{
    try 
    {
        display.value = eval(display.value)
    } 
    catch(error) 
    {
        display.value = "Error"
    }
}
