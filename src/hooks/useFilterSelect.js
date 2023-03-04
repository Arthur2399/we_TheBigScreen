
export const useFilterSelect = (idInput, idSelect) => {
    
    const filterOptions = () => {
        let input = document.getElementById(idInput);
        let filter = input.value.toUpperCase();
        let select = document.getElementById(idSelect);
        let options = select.options;
        for (let i = 0; i < options.length; i++) {
            let option = options[i];
            if (option.text.toUpperCase().indexOf(filter) > -1) {
                option.style.display = "";
            } else {
                option.style.display = "none";
            }
        }
    }
  return {
    filterOptions
  }
}
