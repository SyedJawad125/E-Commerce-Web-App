from django.urls import path
from .views import CategoryViews, ContactViews, ProductViews, OrderViews

urlpatterns = [
    
    path('product', ProductViews.as_view({"get": "get_product",
                                                "post": "post_product",
                                                "patch": "update_product",
                                                "delete": "delete_product"})),
    path('category', CategoryViews.as_view({"get": "get_category",
                                                "post": "post_category",
                                                "patch": "update_category",
                                                "delete": "delete_category"})),
    path('order', OrderViews.as_view({"get": "get_order",
                                                "post": "post_order",
                                                "patch": "update_order",
                                                "delete": "delete_order"})),
                                                
    path('contact', ContactViews.as_view({"get": "get_contact",
                                                "post": "post_contact",
                                                "patch": "update_contact",
                                                "delete": "delete_contact"})),
]