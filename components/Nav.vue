<template>
  <nav class="nav">
    <input
      class="nav__trigger-input"
      type="checkbox"
      id="trigger"
      aria-label="open the navigation"
    />
    <label class="nav__trigger-finger" for="trigger">
      <span></span>
    </label>
    <ul class="nav__list">
      <li class="nav__item">
        <a class="nav__link">
          <span class="nav__text">
            <nuxt-link to="/">Home</nuxt-link>
          </span>
        </a>
      </li>
      <li class="nav__item">
        <a class="nav__link">
          <span class="nav__text">
            News
          </span>
        </a>
        <input
          class="nav__submenu-trigger-input"
          type="checkbox"
          id="submenu-trigger"
        />
        <label
          class="nav__submenu-trigger-finger"
          for="submenu-trigger"
        ></label>
        <ul class="nav__list-child">
          <li class="nav__item">
            <a class="nav__link">
              <span class="nav__text">
                <nuxt-link to="/nyt">New York Times</nuxt-link>
              </span>
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link">
              <span class="nav__text">
                <nuxt-link to="/nyt">New York Times</nuxt-link>
              </span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
$bezier: cubic-bezier(0.75, 0, 0.25, 1);

.nav {
  .nav__text,
  .nav__submenu-trigger-input {
    cursor: pointer;
  }
  color: #ffffff;
  &__trigger-finger {
    // The visible part of the trigger, this will be your "nav is closed!"-state
    position: fixed;
    cursor: pointer;
    top: 0;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    width: 30px;
    height: 15px;
    margin: 40px;
    color: #1d4643;
    &::before {
      content: "";
      position: absolute;
      top: -5px;
      left: -5px;
      bottom: -5px;
      right: -5px;
      background: inherit;
      opacity: 0;
      z-index: -1;
      transition: opacity 0.3s $bezier;
    }
    span {
      display: block;
      width: 100%;
      height: 2px;
      transition: transform 1s $bezier;
      background: currentColor;
      &::before,
      &::after {
        // Create the hamburger lines
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        display: block; // Labels are inline elements, it needs a display property that allows it it's own set height like block;
        height: 2px;
        background: currentColor; // inherits color set on parent
        transition: transform 0.4s $bezier, top 0.4s 0.4s $bezier,
          background 0.2s $bezier;
      }
      &::before {
        top: 0;
      }
      &::after {
        top: calc(100% - 2px);
      }
    }
  }
  &__trigger-input,
  &__submenu-trigger-input {
    // We  want to make the input invisible without using display: none;, because that will remove functionality.
    opacity: 0;
    width: 0;
    height: 0;
    appearance: none;
    position: fixed;
  }
  &__trigger-input {
    &:focus {
      & + label {
        color: rgb(0, 0, 0);
        &::before {
          opacity: 1;
        }
      }
    }
    &:checked {
      & + label {
        // change the label if the input is checked, this will be your "nav is open! 🎉"-state
        height: 10px;
        color: white;
        cursor: pointer;
        span {
          transform: rotate(45deg);
          &::before,
          &::after {
            top: calc(50% - 1px);
            transition: transform 0.4s 0.4s $bezier, top 0.4s $bezier,
              background 0.2s $bezier;
          }
          &::after {
            transform: rotate(90deg);
          }
        }
      }
      & ~ ul {
        // We use a general sibling because it's less work, + label + ul would work as well
        z-index: 9;
        transform: none;
        transition: 0.5s $bezier;
      }
    }
  }
  &__list {
    // we want to make the top navigation items not visible while the input is not :checked.
    position: fixed;
    overflow-y: scroll;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background: #1d4643;
    font-size: 4rem;

    padding: 40px;
    transform: translate(100vw) rotate(45deg);
    transition: 0.2s $bezier;
  }
  &__item {
    list-style: none;
    & + & {
      margin-top: 20px;
    }
  }
  &__submenu-trigger-input {
    &:checked {
      & + label::after {
        transform: translateY(10px);
      }
      & ~ ul {
        display: block;
      }
    }
    &:focus {
      & + label::after {
        transform: translateY(5px);
      }
    }
  }
  &__submenu-trigger-finger {
    &::after {
      content: "";
      display: inline-block;
      border: 10px solid transparent;
      border-top-color: white;
      transition: 0.4s $bezier;
    }
  }
  &__link {
    text-decoration: none;
    color: inherit;
  }
  &__list-child {
    display: none;
    font-size: 2rem;
    margin-top: 10px;
    padding-left: 2rem;
  }
}
</style>
