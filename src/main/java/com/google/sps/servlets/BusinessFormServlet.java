
package com.google.sps.servlets;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;

import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;


@WebServlet("/form-handler")
public class BusinessFormServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    /*
    String description = request.getParameter("description-input");
    String name = request.getParameter("name-input");
    String address = request.getParameter("address-input");
    String city = request.getParameter("city-input");
    String state = request.getParameter("state-input");
    String zip = request.getParameter("zip-input");
    String number = request.getParameter("number-input");


    // // Print the input so you can see it in the server logs.
    System.out.println("description: " + description);
    System.out.println("name: " + name);
    System.out.println("address: " + address);
    System.out.println("City: " + city);
    System.out.println("State: " + state);
    System.out.println("Zip: " + zip);
    System.out.println("Number: " + number);
    

    // Write the input to the response so the user can see it.
    response.setContentType("text/html;");
    response.getWriter().println("<p>Description: " + description + "</p>");
    response.getWriter().println("<p>Name: " + name + "</p>");
    response.getWriter().println("<p>Address: " + address + "</p>");
    response.getWriter().println("<p>City: " + city + "</p>");
    response.getWriter().println("<p>State: " + state + "</p>");
    response.getWriter().println("<p>Zip: " + zip + "</p>");
    response.getWriter().println("<p>Contact Number: " + number + "</p>");
  */









    //response.getWriter().println("<p>Number: " + number + "</p>");
    // Sanitize user input to remove HTML tags and JavaScript.
    //look for the name of the element for the input in the html file

    
    String description = Jsoup.clean(request.getParameter("description-input"), Whitelist.none());
    String name = Jsoup.clean(request.getParameter("name-input"), Whitelist.none());
    String address = Jsoup.clean(request.getParameter("address-input"), Whitelist.none());
    String city = Jsoup.clean(request.getParameter("city-input"), Whitelist.none());
    String state = Jsoup.clean(request.getParameter("state-input"), Whitelist.none());
    String zip = Jsoup.clean(request.getParameter("zip-input"), Whitelist.none());
    String number = Jsoup.clean(request.getParameter("number-input"), Whitelist.none());

    long timestamp = System.currentTimeMillis();

    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("Task");
    FullEntity taskEntity =
        Entity.newBuilder(keyFactory.newKey())
            .set("description", description)
            .set("name", name)
            .set("timestamp", timestamp)
            .build();
    datastore.put(taskEntity);
    

    response.sendRedirect("/BusinessForm.html");
  }
}
