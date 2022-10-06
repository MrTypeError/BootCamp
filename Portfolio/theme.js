document.addEventListener("DOMContentLoaded" ,()=>{
    
    const themePreferenceDark = window.matchMedia("(prefers-color-scheme: dark)")
    themePreferenceDark.addEventListener("change" ,(event)=>{
        checkThemePreference
    })
    const getOSThemepreference =() =>{
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" :"light"
    }
    const getThemeFromLocalStorage = () =>{

    }
    const checkThemePreference = () =>{
        const defaultTheme = getOSThemepreference();
        const currentTheme = getThemeFromLocalStorage();
        if(currentTheme === "dark"){
            document.body.classList.toggle("dark-theme")
        }else{
            document.body.classList.toggle("dark-theme");
        }
        setButtonText(currentTheme ?? defaultTheme)
    }

    const setButtonText = (theme)=>{
        themeSwitcher.textContent = theme === "dark" ? "light" : "Dark";
    }

    const switchTheme = () =>{
        let theme;
        if(themePreferenceDark.matches){
            document.body.classList.toggle("light-theme");
            theme = document.body.classList.contains("light-theme")?"light":"dark"
        }else{
            document.body.classList.toggle("dark-theme");
            theme = document.body.classList.contains("dark-theme")?"dark":"light"
        }
        localStorage.setItem("theme" , theme);
        setButtonText()

    }

    const themeSwitcher = document.getElementById("theme-switcher");
    themeSwitcher.addEventListener("click" , switchTheme)
    checkThemePreference();
})