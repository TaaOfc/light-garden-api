<!DOCTYPE html>
<html lang="en">
<head>
    <%- include('../../global/meta.ejs', { pageTitle: 'Internet - Light Garden Rest API' }) %>
</head>
<body>
    <div class="w-screen h-screen background flex flex-row overflow-x-hidden">
        <%- include('../../component/sidebar.ejs') %>
        <div class="effect-2 w-full">
            <div style="opacity: 1; transform: none;">
                <div class="w-full h-screen overflow-y-scroll">
                    <%- include('../../component/navbar.ejs', { TitlePage: 'Internet', nick: "Users", email: "users@lightgarden.my.id", ImageProfile: "https://i.pinimg.com/236x/56/2e/be/562ebed9cd49b9a09baa35eddfe86b00.jpg"}) %>
                    <div class="p-4 md:px-8 z-30 background">
                        <div class="overflow-x-auto relative rounded-xl border-a">
                            <table class="w-full text-sm text-left border-y">
                                <thead class="text-sm border-b">
                                    <tr>
                                        <th scope="col" class="py-3 px-2 text-center">No</th>
                                        <th scope="col" class="py-3 px-2">Feature Name</th>
                                        <th scope="col" class="py-3 px-2">Category</th>
                                        <th scope="col" class="py-3 px-2">Request Method</th>
                                        <th scope="col" class="py-3 px-2">Description</th>
                                        <th scope="col" class="py-3 px-2">Query Parameter</th>
                                        <th scope="col" class="py-3 px-2">Status</th>
                                        <th scope="col" class="py-3 px-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <% data.forEach((item, index) => { %>
                                        <tr class="border-b last:border-none background text-gray-600 group">
                                            <td class="py-4 px-4 md:px-1 text-center"><%= index + 1 %></td>
                                            <td class="py-4 px-6 whitespace-nowrap"><%= item.name %></td>
                                            <td class="py-4 px-6 whitespace-nowrap"><%= item.category %></td>
                                            <td class="py-4 px-6 flex gap-2 items-center">
                                                <div class="rounded-xl px-2 py-1 text-xs text-white transition-none <%= item.requestMethod === 'GET' ? 'bg-blue-500' : 'bg-red-500' %> group-hover:<%= item.requestMethod === 'GET' ? 'bg-blue-700' : 'bg-red-700' %>"><%= item.requestMethod %></div>
                                            </td>
                                            <td class="py-4 px-6 whitespace-nowrap lg:whitespace-normal"><%= item.description %></td>
                                            <td class="py-4 px-6 whitespace-nowrap lg:whitespace-normal lg:max-w-xs"><%= item.queryParameter %></td>
                                            <td class="py-4 px-6">
                                                <div class="<%= item.status === 'active' ? 'bg-success' : 'bg-inactive' %> capitalize w-fit px-2 py-1 text-white text-xs rounded-xl font-semibold"><%= item.status %></div>
                                            </td>
                                            <td class="py-4 px-6 flex">
                                                <a href="<%= item.link %>" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 512 512>
                                                        <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                    <% }); %>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
  
