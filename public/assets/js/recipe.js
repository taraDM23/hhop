$(document).ready(() => {
  // delete button listener
  $(".btn-delete").click(async (event) => {
    event.preventDefault();

    // get recipe id
    const id = $(event.target).closest(".recipe").data("id");
    try {
      // delete the recipe
      await $.ajax({
        method: "DELETE",
        url: `/recipe/delete/${id}`,
      });
      // if success, redirect to user homepage.
      return window.location.replace("/user");
    } catch (err) {
      // eslint-disable-next-line no-undef
      return alertUser({ error: err.responseJson.error });
    }
  });

  // edit button handler
  $(".btn-edit").click(async (event) => {
    event.preventDefault();
    // get recipe id
    const id = $(event.target).closest(".recipe").data("id");
    window.location.replace(`/recipe/edit/${id}`);
  });

  // publish button handler
  $(".btn-publish").click(async (event) => {
    event.preventDefault();
    // get recipe id
    const id = $(event.target).closest(".recipe").data("id");
    try {
      // delete the recipe
      await $.ajax({
        method: "PUT",
        url: `/recipe/publish/${id}`,
      });
      // if success, redirect to user homepage.
      return window.location.reload();
    } catch (err) {
      // eslint-disable-next-line no-undef
      return alertUser({ error: err.responseJson.error });
    }
  });
});
