import { zodTransform } from "@sideko-inc/stripe/core";
import {
  BillingMeterCreateBodyCustomerMapping,
  External$BillingMeterCreateBodyCustomerMapping,
  Schemas$BillingMeterCreateBodyCustomerMapping,
} from "@sideko-inc/stripe/types/billing-meter-create-body-customer-mapping";
import {
  BillingMeterCreateBodyDefaultAggregation,
  External$BillingMeterCreateBodyDefaultAggregation,
  Schemas$BillingMeterCreateBodyDefaultAggregation,
} from "@sideko-inc/stripe/types/billing-meter-create-body-default-aggregation";
import {
  BillingMeterCreateBodyValueSettings,
  External$BillingMeterCreateBodyValueSettings,
  Schemas$BillingMeterCreateBodyValueSettings,
} from "@sideko-inc/stripe/types/billing-meter-create-body-value-settings";
import {
  BillingMeterDeactivateBody,
  External$BillingMeterDeactivateBody,
  Schemas$BillingMeterDeactivateBody,
} from "@sideko-inc/stripe/types/billing-meter-deactivate-body";
import {
  BillingMeterReactivateBody,
  External$BillingMeterReactivateBody,
  Schemas$BillingMeterReactivateBody,
} from "@sideko-inc/stripe/types/billing-meter-reactivate-body";
import {
  BillingMeterUpdateBody,
  External$BillingMeterUpdateBody,
  Schemas$BillingMeterUpdateBody,
} from "@sideko-inc/stripe/types/billing-meter-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Filter results to only include meters with the given status.
   */
  status?: ("active" | "inactive") | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
  status?: ("active" | "inactive") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
    status: z.enum(["active", "inactive"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
    status: z.enum(["active", "inactive"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
      status: "status",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  id: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * Fields that specify how to map a meter event to a customer.
   */
  customerMapping?: BillingMeterCreateBodyCustomerMapping | undefined;
  /**
   * The default settings to aggregate a meter's events with.
   */
  defaultAggregation: BillingMeterCreateBodyDefaultAggregation;
  /**
   * The meter’s name. Not visible to the customer.
   */
  displayName: string;
  /**
   * The name of the meter event to record usage for. Corresponds with the `event_name` field on meter events.
   */
  eventName: string;
  /**
   * The time window to pre-aggregate meter events for, if any.
   */
  eventTimeWindow?: ("day" | "hour") | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Fields that specify how to calculate a meter event's value.
   */
  valueSettings?: BillingMeterCreateBodyValueSettings | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  customer_mapping?: External$BillingMeterCreateBodyCustomerMapping | undefined;
  default_aggregation: External$BillingMeterCreateBodyDefaultAggregation;
  display_name: string;
  event_name: string;
  event_time_window?: ("day" | "hour") | undefined;
  expand?: string[] | undefined;
  value_settings?: External$BillingMeterCreateBodyValueSettings | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_mapping:
      Schemas$BillingMeterCreateBodyCustomerMapping.in.optional(),
    default_aggregation: Schemas$BillingMeterCreateBodyDefaultAggregation.in,
    display_name: z.string(),
    event_name: z.string(),
    event_time_window: z.enum(["day", "hour"]).optional(),
    expand: z.array(z.string()).optional(),
    value_settings: Schemas$BillingMeterCreateBodyValueSettings.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer_mapping: "customerMapping",
      default_aggregation: "defaultAggregation",
      display_name: "displayName",
      event_name: "eventName",
      event_time_window: "eventTimeWindow",
      expand: "expand",
      value_settings: "valueSettings",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    customerMapping:
      Schemas$BillingMeterCreateBodyCustomerMapping.out.optional(),
    defaultAggregation: Schemas$BillingMeterCreateBodyDefaultAggregation.out,
    displayName: z.string(),
    eventName: z.string(),
    eventTimeWindow: z.enum(["day", "hour"]).optional(),
    expand: z.array(z.string()).optional(),
    valueSettings: Schemas$BillingMeterCreateBodyValueSettings.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customerMapping: "customer_mapping",
      defaultAggregation: "default_aggregation",
      displayName: "display_name",
      eventName: "event_name",
      eventTimeWindow: "event_time_window",
      expand: "expand",
      valueSettings: "value_settings",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: BillingMeterUpdateBody | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$BillingMeterUpdateBody | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$BillingMeterUpdateBody.in.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$BillingMeterUpdateBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * DeactivateRequest
 */
export type DeactivateRequest = {
  data?: BillingMeterDeactivateBody | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
};

/**
 * @internal
 * DeactivateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeactivateRequest = {
  data?: External$BillingMeterDeactivateBody | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeactivateRequest
 */
const SchemaIn$DeactivateRequest: z.ZodType<
  DeactivateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$BillingMeterDeactivateBody.in.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeactivateRequest
 */
const SchemaOut$DeactivateRequest: z.ZodType<
  External$DeactivateRequest, // output type of this zod object
  z.ZodTypeDef,
  DeactivateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$BillingMeterDeactivateBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$DeactivateRequest = {
  in: SchemaIn$DeactivateRequest,
  out: SchemaOut$DeactivateRequest,
};

/**
 * ReactivateRequest
 */
export type ReactivateRequest = {
  data?: BillingMeterReactivateBody | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
};

/**
 * @internal
 * ReactivateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReactivateRequest = {
  data?: External$BillingMeterReactivateBody | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReactivateRequest
 */
const SchemaIn$ReactivateRequest: z.ZodType<
  ReactivateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$BillingMeterReactivateBody.in.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReactivateRequest
 */
const SchemaOut$ReactivateRequest: z.ZodType<
  External$ReactivateRequest, // output type of this zod object
  z.ZodTypeDef,
  ReactivateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$BillingMeterReactivateBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$ReactivateRequest = {
  in: SchemaIn$ReactivateRequest,
  out: SchemaOut$ReactivateRequest,
};
