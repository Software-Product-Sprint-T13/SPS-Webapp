
package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.sps.data.Task;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.Query;
import com.google.cloud.datastore.QueryResults;
import com.google.cloud.datastore.StructuredQuery.OrderBy;
import com.google.gson.Gson;

/** Servlet responsible for displaying form. */
@WebServlet("/show-form")
public class ShowBusinessFormServlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
        Query<Entity> query = Query.newEntityQueryBuilder().setKind("Business Data").setOrderBy(OrderBy.desc("name"))
                .build();
        QueryResults<Entity> results = datastore.run(query);

        List<Task> tasks = new ArrayList<>();
        while (results.hasNext()) {
            Entity entity = results.next();
            long id = entity.getKey().getId();
            String name = entity.getString("name");
            long timestamp = entity.getLong("timestamp");
            String street = entity.contains("street") ? entity.getString("street") : "";
            String city = entity.contains("city") ? entity.getString("city") : "";
            String state = entity.contains("state") ? entity.getString("state") : "";
            String zip = entity.contains("zipcode") ? entity.getString("zipcode") : "";
            String tel = entity.contains("Tel") ? entity.getString("Tel") : "";
            String description = entity.contains("description") ? entity.getString("description") : "";
            String apprenticeship = entity.contains("apprenticeship") ? entity.getString("apprenticeship") : "";

            String email = entity.contains("email") ? entity.getString("email") : "";
            String website = entity.contains("website") ? entity.getString("website") : "";

            // availability
            String sunFrom = entity.contains("sunday1") ? entity.getString("sunday1") : "";
            String sunTo = entity.contains("sunday2") ? entity.getString("sunday2") : "";
            String monFrom = entity.contains("monday1") ? entity.getString("monday1") : "";
            String monTo = entity.contains("monday2") ? entity.getString("monday2") : "";
            String tueFrom = entity.contains("tuesday1") ? entity.getString("tuesday1") : "";
            String tueTo = entity.contains("tuesday2") ? entity.getString("tuesday2") : "";
            String wedFrom = entity.contains("wednesday1") ? entity.getString("wednesday1") : "";
            String wedTo = entity.contains("wednesday2") ? entity.getString("wednesday2") : "";
            String thurFrom = entity.contains("thursday1") ? entity.getString("thursday1") : "";
            String thurTo = entity.contains("thursday2") ? entity.getString("thursday2") : "";
            String friFrom = entity.contains("friday1") ? entity.getString("friday1") : "";
            String friTo = entity.contains("friday2") ? entity.getString("friday2") : "";
            String satFrom = entity.contains("saturday1") ? entity.getString("saturday1") : "";
            String satTo = entity.contains("saturday2") ? entity.getString("saturday2") : "";

            Task task = new Task(id, name, timestamp, street, city, state, zip, tel, description, apprenticeship, email,
                    website, sunFrom, sunTo, monFrom, monTo, tueFrom, tueTo, wedFrom, wedTo, thurFrom, thurTo, friFrom,
                    friTo, satFrom, satTo);
            tasks.add(task);
        }

        Gson gson = new Gson();

        response.setContentType("application/json;");
        response.getWriter().println(gson.toJson(tasks));
    }
}
