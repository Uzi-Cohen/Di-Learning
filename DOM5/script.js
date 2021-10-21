function display(n)
  {
    
    for (var i = 0; i < n; i++)
    {
      
      for (var j = 0; j <= Math.floor(n / 2); j++)
      {
       
        if (
          ((j == 0 || j == Math.floor(n / 2)) && i != 0) ||
         
          (i == 0 && j != 0 && j != Math.floor(n / 2)) ||
          
          i == Math.floor(n / 2)
        ) {
          document.write("*");
        } else document.write("  ");
      }
      document.write("<br>");
    }
  }
  
  display(7);
   
</script>