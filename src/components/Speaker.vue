<template>
    <a :href="link" target="_blank" class="speaker-card">
        <div class="speaker-image">
            <img :alt="name" class="speaker-img" :src="img" />
        </div>
        <div class="speaker-about">
            <p class="speaker-text bold-text">{{ name }}</p>
            <p class="speaker-text">{{ role }}</p>
            <p class="speaker-text">{{ company }}</p>
        </div>
    </a>
</template>

<script setup lang="ts">
  defineProps(['img', 'name', 'role', 'company', 'link'])
</script>

<style scoped>
.speaker-card {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    max-width: 180px;
    display: block;
    border-radius: 0.9rem 0.9rem 0.9rem 0.9rem;
    overflow: hidden;
    padding: 0;
    transition: auto;

    --border-size: 0.2rem;
    border: var(--border-size) solid transparent;
}

.speaker-card:hover {
    .speaker-img {
        width: 150%;
    }
}

.speaker-image {
    position: relative;
    overflow: hidden;
    width: 180px;
    height: 230px;
    border: 0px;
    box-sizing: border-box;
}

.speaker-img {
    transition: width 0.2s ease-in-out;
    width: 130%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.speaker-about {
    width: 100%;
    background-color: white;
    padding: 10px;
}

.speaker-text {
    font-size: 13px;
    color: black;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.speaker-text-subject {
    background-color: rgb(51, 51, 51);
    font-size: 15px;
    color: white;
    text-align: center;
    margin-top: 10px;
    font-family: 'Courier New', Courier, monospace;
}

@supports (background: paint(houdini)) {
    @property --angle {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
    }

    @keyframes rotate {
        to {
            --angle: 360deg;
        }
    }

    .speaker-card:hover {
        border: var(--border-size) dotted transparent;
        background-image: linear-gradient(to right,
                rgb(255 255 255),
                rgb(255 255 255)),
            conic-gradient(from var(--angle),
                #739cee 0deg 270deg,
                #0052F5 270deg 360deg);
        background-origin: border-box;
        background-clip: padding-box, border-box;
        animation: rotate 4s linear infinite;
    }
}
</style>