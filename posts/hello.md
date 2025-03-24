# Title Hello

## How to

Script here

<script setup>
import { useSidebar } from 'vitepress/theme'

const { hasSidebar } = useSidebar()
</script>


<div> {{ hasSidebar }} </div>
  <div v-if="hasSidebar">Only show when sidebar exists</div>
