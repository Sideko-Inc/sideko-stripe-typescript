import { zodTransform } from "@sideko-inc/stripe/core";
import {
  CustomerSubscriptionCreateBody,
  External$CustomerSubscriptionCreateBody,
  Schemas$CustomerSubscriptionCreateBody,
} from "@sideko-inc/stripe/types/customer-subscription-create-body";
import {
  CustomerSubscriptionDeleteBody,
  External$CustomerSubscriptionDeleteBody,
  Schemas$CustomerSubscriptionDeleteBody,
} from "@sideko-inc/stripe/types/customer-subscription-delete-body";
import {
  CustomerSubscriptionModifyBody,
  External$CustomerSubscriptionModifyBody,
  Schemas$CustomerSubscriptionModifyBody,
} from "@sideko-inc/stripe/types/customer-subscription-modify-body";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  data?: CustomerSubscriptionDeleteBody | undefined;
  customer: string;
  subscriptionExposedId: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  data?: External$CustomerSubscriptionDeleteBody | undefined;
  customer: string;
  subscription_exposed_id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$CustomerSubscriptionDeleteBody.in.optional(),
    customer: z.string(),
    subscription_exposed_id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      customer: "customer",
      subscription_exposed_id: "subscriptionExposedId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    data: Schemas$CustomerSubscriptionDeleteBody.out.optional(),
    customer: z.string(),
    subscriptionExposedId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      customer: "customer",
      subscriptionExposedId: "subscription_exposed_id",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * ListRequest
 */
export type ListRequest = {
  customer: string;
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
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  customer: string;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
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
    customer: z.string(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
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
    customer: z.string(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
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
  customer: string;
  subscriptionExposedId: string;
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
  customer: string;
  subscription_exposed_id: string;
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
    customer: z.string(),
    subscription_exposed_id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      subscription_exposed_id: "subscriptionExposedId",
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
    customer: z.string(),
    subscriptionExposedId: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      subscriptionExposedId: "subscription_exposed_id",
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
  data?: CustomerSubscriptionCreateBody | undefined;
  customer: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$CustomerSubscriptionCreateBody | undefined;
  customer: string;
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
    data: Schemas$CustomerSubscriptionCreateBody.in.optional(),
    customer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      customer: "customer",
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
    data: Schemas$CustomerSubscriptionCreateBody.out.optional(),
    customer: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      customer: "customer",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * ModifyRequest
 */
export type ModifyRequest = {
  data?: CustomerSubscriptionModifyBody | undefined;
  customer: string;
  subscriptionExposedId: string;
};

/**
 * @internal
 * ModifyRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ModifyRequest = {
  data?: External$CustomerSubscriptionModifyBody | undefined;
  customer: string;
  subscription_exposed_id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ModifyRequest
 */
const SchemaIn$ModifyRequest: z.ZodType<
  ModifyRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$CustomerSubscriptionModifyBody.in.optional(),
    customer: z.string(),
    subscription_exposed_id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      customer: "customer",
      subscription_exposed_id: "subscriptionExposedId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ModifyRequest
 */
const SchemaOut$ModifyRequest: z.ZodType<
  External$ModifyRequest, // output type of this zod object
  z.ZodTypeDef,
  ModifyRequest // the object to be transformed
> = z
  .object({
    data: Schemas$CustomerSubscriptionModifyBody.out.optional(),
    customer: z.string(),
    subscriptionExposedId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      customer: "customer",
      subscriptionExposedId: "subscription_exposed_id",
    });
  });

export const Schemas$ModifyRequest = {
  in: SchemaIn$ModifyRequest,
  out: SchemaOut$ModifyRequest,
};
