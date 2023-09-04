<script lang="ts">
    import {clickOutside} from '../utilities/ClickOutside.js';

    let value = ""
    let input
    let active = false
    export let title = ""

    const outsideClick = () => {
        if(!value) active = false 
    }

    const toggleLabel = () => {
        input.focus()
        
        if (!value) active = true
    }

    const erase = () => {
        value = ""
    }

</script>

<style lang="scss">
    .input-text-to-line {
        position: relative; 
        margin: 50px;

        &.active {
            label {
                top: 0%;
                left: 25px;
                color: rgb(126, 126, 126);

                scale: 0.85;
                transition: 0.5s ease;
            }

            input {
                border: 3px solid rgb(0, 255, 157);
            }

            .erase{
                color: rgb(126, 126, 126);

                position: absolute;
                display: block;
                cursor: pointer;
            }
        }

        input {
            border: 3px solid rgb(119, 0, 255);
            border-radius: 7px;
            padding: 15px 10px;
        }

        label {
            background-color: rgb(255, 255, 255);

            position: absolute;
            left: 8px;
            top: 50%;

            margin-top: -10px;
            padding: 0 5px 0 5px;
            border-radius: 5px;
            
            transition: 0.5s ease;
        }

        label:hover {
            cursor: text;
        }

        .erase{
            position: absolute;
            display: none;

            top: 50%;
            margin-top: -10px;
            right: 15px;
        }
    }
</style>

<div class="input-text-to-line" class:active on:click={toggleLabel} use:clickOutside on:click_outside={outsideClick}>
    <label >{title}</label>
    <input type="text" bind:value={value} bind:this={input}/>
    <div class="erase" on:click={erase}>x</div>
</div>