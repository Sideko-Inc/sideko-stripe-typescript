import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$SubscriptionScheduleCancelBody,
  Schemas$SubscriptionScheduleCancelBody,
  SubscriptionScheduleCancelBody,
} from "@sideko-inc/stripe/types/subscription-schedule-cancel-body";
import {
  External$SubscriptionScheduleCreateBody,
  Schemas$SubscriptionScheduleCreateBody,
  SubscriptionScheduleCreateBody,
} from "@sideko-inc/stripe/types/subscription-schedule-create-body";
import {
  External$SubscriptionScheduleListCanceledAtObj0,
  Schemas$SubscriptionScheduleListCanceledAtObj0,
  SubscriptionScheduleListCanceledAtObj0,
} from "@sideko-inc/stripe/types/subscription-schedule-list-canceled-at-obj0";
import {
  External$SubscriptionScheduleListCompletedAtObj0,
  Schemas$SubscriptionScheduleListCompletedAtObj0,
  SubscriptionScheduleListCompletedAtObj0,
} from "@sideko-inc/stripe/types/subscription-schedule-list-completed-at-obj0";
import {
  External$SubscriptionScheduleListCreatedObj0,
  Schemas$SubscriptionScheduleListCreatedObj0,
  SubscriptionScheduleListCreatedObj0,
} from "@sideko-inc/stripe/types/subscription-schedule-list-created-obj0";
import {
  External$SubscriptionScheduleListReleasedAtObj0,
  Schemas$SubscriptionScheduleListReleasedAtObj0,
  SubscriptionScheduleListReleasedAtObj0,
} from "@sideko-inc/stripe/types/subscription-schedule-list-released-at-obj0";
import {
  External$SubscriptionScheduleReleaseBody,
  Schemas$SubscriptionScheduleReleaseBody,
  SubscriptionScheduleReleaseBody,
} from "@sideko-inc/stripe/types/subscription-schedule-release-body";
import {
  External$SubscriptionScheduleUpdateBody,
  Schemas$SubscriptionScheduleUpdateBody,
  SubscriptionScheduleUpdateBody,
} from "@sideko-inc/stripe/types/subscription-schedule-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return subscription schedules that were created canceled the given date interval.
   */
  canceledAt?: (SubscriptionScheduleListCanceledAtObj0 | number) | undefined;
  /**
   * Only return subscription schedules that completed during the given date interval.
   */
  completedAt?: (SubscriptionScheduleListCompletedAtObj0 | number) | undefined;
  /**
   * Only return subscription schedules that were created during the given date interval.
   */
  created?: (SubscriptionScheduleListCreatedObj0 | number) | undefined;
  /**
   * Only return subscription schedules for the given customer.
   */
  customer?: string | undefined;
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
   * Only return subscription schedules that were released during the given date interval.
   */
  releasedAt?: (SubscriptionScheduleListReleasedAtObj0 | number) | undefined;
  /**
   * Only return subscription schedules that have not started yet.
   */
  scheduled?: boolean | undefined;
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
  canceled_at?:
    | (External$SubscriptionScheduleListCanceledAtObj0 | number)
    | undefined;
  completed_at?:
    | (External$SubscriptionScheduleListCompletedAtObj0 | number)
    | undefined;
  created?: (External$SubscriptionScheduleListCreatedObj0 | number) | undefined;
  customer?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  released_at?:
    | (External$SubscriptionScheduleListReleasedAtObj0 | number)
    | undefined;
  scheduled?: boolean | undefined;
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
    canceled_at: z
      .union([
        Schemas$SubscriptionScheduleListCanceledAtObj0.in,
        z.number().int(),
      ])
      .optional(),
    completed_at: z
      .union([
        Schemas$SubscriptionScheduleListCompletedAtObj0.in,
        z.number().int(),
      ])
      .optional(),
    created: z
      .union([Schemas$SubscriptionScheduleListCreatedObj0.in, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    released_at: z
      .union([
        Schemas$SubscriptionScheduleListReleasedAtObj0.in,
        z.number().int(),
      ])
      .optional(),
    scheduled: z.boolean().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      canceled_at: "canceledAt",
      completed_at: "completedAt",
      created: "created",
      customer: "customer",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      released_at: "releasedAt",
      scheduled: "scheduled",
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
    canceledAt: z
      .union([
        Schemas$SubscriptionScheduleListCanceledAtObj0.out,
        z.number().int(),
      ])
      .optional(),
    completedAt: z
      .union([
        Schemas$SubscriptionScheduleListCompletedAtObj0.out,
        z.number().int(),
      ])
      .optional(),
    created: z
      .union([
        Schemas$SubscriptionScheduleListCreatedObj0.out,
        z.number().int(),
      ])
      .optional(),
    customer: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    releasedAt: z
      .union([
        Schemas$SubscriptionScheduleListReleasedAtObj0.out,
        z.number().int(),
      ])
      .optional(),
    scheduled: z.boolean().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      canceledAt: "canceled_at",
      completedAt: "completed_at",
      created: "created",
      customer: "customer",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      releasedAt: "released_at",
      scheduled: "scheduled",
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
  schedule: string;
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
  schedule: string;
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
    schedule: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      schedule: "schedule",
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
    schedule: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      schedule: "schedule",
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
  data?: SubscriptionScheduleCreateBody | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$SubscriptionScheduleCreateBody | undefined;
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
    data: Schemas$SubscriptionScheduleCreateBody.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
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
    data: Schemas$SubscriptionScheduleCreateBody.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
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
  data?: SubscriptionScheduleUpdateBody | undefined;
  schedule: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$SubscriptionScheduleUpdateBody | undefined;
  schedule: string;
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
    data: Schemas$SubscriptionScheduleUpdateBody.in.optional(),
    schedule: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      schedule: "schedule",
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
    data: Schemas$SubscriptionScheduleUpdateBody.out.optional(),
    schedule: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      schedule: "schedule",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * CancelRequest
 */
export type CancelRequest = {
  data?: SubscriptionScheduleCancelBody | undefined;
  schedule: string;
};

/**
 * @internal
 * CancelRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelRequest = {
  data?: External$SubscriptionScheduleCancelBody | undefined;
  schedule: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CancelRequest
 */
const SchemaIn$CancelRequest: z.ZodType<
  CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$SubscriptionScheduleCancelBody.in.optional(),
    schedule: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      schedule: "schedule",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CancelRequest
 */
const SchemaOut$CancelRequest: z.ZodType<
  External$CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  CancelRequest // the object to be transformed
> = z
  .object({
    data: Schemas$SubscriptionScheduleCancelBody.out.optional(),
    schedule: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      schedule: "schedule",
    });
  });

export const Schemas$CancelRequest = {
  in: SchemaIn$CancelRequest,
  out: SchemaOut$CancelRequest,
};

/**
 * ReleaseRequest
 */
export type ReleaseRequest = {
  data?: SubscriptionScheduleReleaseBody | undefined;
  schedule: string;
};

/**
 * @internal
 * ReleaseRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReleaseRequest = {
  data?: External$SubscriptionScheduleReleaseBody | undefined;
  schedule: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReleaseRequest
 */
const SchemaIn$ReleaseRequest: z.ZodType<
  ReleaseRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$SubscriptionScheduleReleaseBody.in.optional(),
    schedule: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      schedule: "schedule",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReleaseRequest
 */
const SchemaOut$ReleaseRequest: z.ZodType<
  External$ReleaseRequest, // output type of this zod object
  z.ZodTypeDef,
  ReleaseRequest // the object to be transformed
> = z
  .object({
    data: Schemas$SubscriptionScheduleReleaseBody.out.optional(),
    schedule: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      schedule: "schedule",
    });
  });

export const Schemas$ReleaseRequest = {
  in: SchemaIn$ReleaseRequest,
  out: SchemaOut$ReleaseRequest,
};
