import React from "react";

export default function BlogContent() {
  return (
    <section className="container section-padding">
      <article className="bg-white">
        <div className="mb-6">
          <h1 className="text-4xl md:text-4xl text-gray-900 mb-6 leading-tight">
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </h1>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.
          </p>

          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!
          </p>

          <div className="my-10">
            <img
              src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Restaurant dish"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="mb-6">
            <h1 className="text-4xl md:text-4xl text-gray-900 mb-6 leading-tight">
              #2. Creative WordPress Themes
            </h1>
          </div>

          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.
          </p>

          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.
          </p>

          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.
          </p>

          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!
          </p>

          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?
          </p>
        </div>

        <div className="mt-12 pt-8">
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {["FOOD", "WINE", "DRINK", "DISH"].map((tag) => (
              <a
                key={tag}
                href="#"
                className="text-xs bg-white border border-gray-300 hover:border-gray-600 px-3 py-1 rounded transition-colors"
              >
                {tag}
              </a>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-start gap-6 mb-4">
              <div className="w-12 h-12 md:w-32 md:h-32 flex-shrink-0 bg-gray-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb"
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900">
                  George Washington
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
                  itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt
                  placeat nam vero culpa sapiente consectetur similique, inventore eos
                  fugit cupiditate numquam! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Aspernatur, adipisci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
