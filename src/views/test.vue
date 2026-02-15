<template>
  <div id="simplybook_widget"></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = "//widget.simplybook.asia/v2/widget/widget.js"
  script.onload = () => {
    const widget = new SimplybookWidget({
      widget_type:"iframe",
      url:"https://http20218296182.simplybook.asia",
      theme:"default",
      theme_settings:{
        timeline_hide_unavailable:"1",
        sb_base_color:"#dd3649"
      },
      timeline:"modern",
      datepicker:"top_calendar",
      is_rtl:false
    })
    widget.draw("#simplybook_widget")
  }
  document.body.appendChild(script)
})
</script>
