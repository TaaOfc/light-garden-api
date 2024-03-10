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
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24">
                                                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986z"></path>
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
  
