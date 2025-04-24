import { zodTransform } from "@sideko-inc/stripe/core";
import {
  BillingAlertActivateBody,
  External$BillingAlertActivateBody,
  Schemas$BillingAlertActivateBody,
} from "@sideko-inc/stripe/types/billing-alert-activate-body";
import {
  BillingAlertArchiveBody,
  External$BillingAlertArchiveBody,
  Schemas$BillingAlertArchiveBody,
} from "@sideko-inc/stripe/types/billing-alert-archive-body";
import {
  BillingAlertCreateBodyUsageThreshold,
  External$BillingAlertCreateBodyUsageThreshold,
  Schemas$BillingAlertCreateBodyUsageThreshold,
} from "@sideko-inc/stripe/types/billing-alert-create-body-usage-threshold";
import {
  BillingAlertDeactivateBody,
  External$BillingAlertDeactivateBody,
  Schemas$BillingAlertDeactivateBody,
} from "@sideko-inc/stripe/types/billing-alert-deactivate-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Filter results to only include this type of alert.
   */
  alertType?: "usage_threshold" | undefined;
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
   * Filter results to only include alerts with the given meter.
   */
  meter?: string | undefined;
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
  alert_type?: "usage_threshold" | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  meter?: string | undefined;
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
    alert_type: z.enum(["usage_threshold"]).optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    meter: z.string().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alert_type: "alertType",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      meter: "meter",
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
    alertType: z.enum(["usage_threshold"]).optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    meter: z.string().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alertType: "alert_type",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      meter: "meter",
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
   * The type of alert to create.
   */
  alertType: "usage_threshold";
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The title of the alert.
   */
  title: string;
  /**
   * The configuration of the usage threshold.
   */
  usageThreshold?: BillingAlertCreateBodyUsageThreshold | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  alert_type: "usage_threshold";
  expand?: string[] | undefined;
  title: string;
  usage_threshold?: External$BillingAlertCreateBodyUsageThreshold | undefined;
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
    alert_type: z.enum(["usage_threshold"]),
    expand: z.array(z.string()).optional(),
    title: z.string(),
    usage_threshold: Schemas$BillingAlertCreateBodyUsageThreshold.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alert_type: "alertType",
      expand: "expand",
      title: "title",
      usage_threshold: "usageThreshold",
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
    alertType: z.enum(["usage_threshold"]),
    expand: z.array(z.string()).optional(),
    title: z.string(),
    usageThreshold: Schemas$BillingAlertCreateBodyUsageThreshold.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alertType: "alert_type",
      expand: "expand",
      title: "title",
      usageThreshold: "usage_threshold",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * ActivateRequest
 */
export type ActivateRequest = {
  data?: BillingAlertActivateBody | undefined;
  id: string;
};

/**
 * @internal
 * ActivateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ActivateRequest = {
  data?: External$BillingAlertActivateBody | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ActivateRequest
 */
const SchemaIn$ActivateRequest: z.ZodType<
  ActivateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$BillingAlertActivateBody.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ActivateRequest
 */
const SchemaOut$ActivateRequest: z.ZodType<
  External$ActivateRequest, // output type of this zod object
  z.ZodTypeDef,
  ActivateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$BillingAlertActivateBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$ActivateRequest = {
  in: SchemaIn$ActivateRequest,
  out: SchemaOut$ActivateRequest,
};

/**
 * ArchiveRequest
 */
export type ArchiveRequest = {
  data?: BillingAlertArchiveBody | undefined;
  id: string;
};

/**
 * @internal
 * ArchiveRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ArchiveRequest = {
  data?: External$BillingAlertArchiveBody | undefined;
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ArchiveRequest
 */
const SchemaIn$ArchiveRequest: z.ZodType<
  ArchiveRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$BillingAlertArchiveBody.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ArchiveRequest
 */
const SchemaOut$ArchiveRequest: z.ZodType<
  External$ArchiveRequest, // output type of this zod object
  z.ZodTypeDef,
  ArchiveRequest // the object to be transformed
> = z
  .object({
    data: Schemas$BillingAlertArchiveBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$ArchiveRequest = {
  in: SchemaIn$ArchiveRequest,
  out: SchemaOut$ArchiveRequest,
};

/**
 * DeactivateRequest
 */
export type DeactivateRequest = {
  data?: BillingAlertDeactivateBody | undefined;
  id: string;
};

/**
 * @internal
 * DeactivateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeactivateRequest = {
  data?: External$BillingAlertDeactivateBody | undefined;
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
    data: Schemas$BillingAlertDeactivateBody.in.optional(),
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
    data: Schemas$BillingAlertDeactivateBody.out.optional(),
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
