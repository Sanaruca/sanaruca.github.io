import { error, type Load } from "@sveltejs/kit";

export const load: Load<{ article: string }> = async ({ params }) => {
  try {
    const res = await import(`../../../articles/${params.article}.svx`);

    return {
      ...res.metadata,
      body: res.default,
    };
  } catch (err) {
    throw error(404, "post not found");
  }
};
