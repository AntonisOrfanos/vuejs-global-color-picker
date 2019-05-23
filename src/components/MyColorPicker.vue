<template>
  <div class="my-color-picker">
    <!-- <p>picker</p> -->
    <div v-for="color in colors" :key="color.id" class="color-selector">
      <span 
        :class="[color.name, color.selected? 'selected-color' : '']" 
        @click="select(color)" 
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyColorPicker',
  data: function() {
    return {
      colors:  [
        {id: 0, name:"no-color", selected: true}, 
        {id: 1, name:"color1", selected: false}, 
        {id: 2, name:"color2", selected: false}, 
        {id: 3, name:"color3", selected: false}
      ]
    }
  },
  methods: {
    select(clickedColor) {
      this.colors = this.colors.map(
        col => {
          if (col.id == clickedColor.id){
            col.selected = true
            this.SetBodyColor(clickedColor.name)
          }
          else
            col.selected = false
          return col;
        }
      )
    },
    SetBodyColor(selectedColorClass) {
      this.colors.forEach(col => {
        document.body.classList.remove(col.name);
      })
      document.body.classList.add(selectedColorClass);
    }
  },
  mounted: function() {
    document.body.classList.add(this.colors[0].name);
  }
}
</script>

<style lang="scss">
$default-color: #333;
$colors: (no-color: #333, color1: lightseagreen, color2: lightcoral, color3: maroon);

@each $name, $value in $colors {
  body.#{$name} {
    background-color: $value;
  }

  *.#{$name} {
    @for $i from 1 through 6 {
      h#{$i} {
        color: $value
      }
    }
    a {
      &:hover {
        color: $default-color;
      }
      text-decoration: underline dotted;
      color: $value;
      // font-weight: bold;
    }
  }
  span.#{$name} {
    background-color: $value;
  }
}

.router-link-exact-active {
    color: $default-color !important;
  }

.my-color-picker div.color-selector {
  display: inline-block;
  padding: 5px;
}
.my-color-picker div.color-selector span{
  width: 20px;
  height: 20px;
  border-radius: 10px;
  display: block;
  cursor: pointer;
}
.my-color-picker div.color-selector span.selected-color {
  border: 2px solid #000;
  box-shadow: 0px 0px 3px 1px #333;
}
</style>
