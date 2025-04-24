import {
  BillingClocksResourceStatusDetailsStatusDetails,
  External$BillingClocksResourceStatusDetailsStatusDetails,
  Schemas$BillingClocksResourceStatusDetailsStatusDetails,
} from "./billing-clocks-resource-status-details-status-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A test clock enables deterministic control over objects in testmode. With a test clock, you can create
 * objects at a frozen time in the past or future, and advance to a specific future time to observe webhooks and state changes. After the clock advances,
 * you can either validate the current state of your scenario (and test your assumptions), change the current state of your scenario (and test more complex scenarios), or keep advancing forward in time.
 */
export type TestHelpersTestClock = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Time at which this clock is scheduled to auto delete.
   */
  deletesAfter: number;
  /**
   * Time at which all objects belonging to this clock are frozen.
   */
  frozenTime: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The custom name supplied at creation.
   */
  name?: string | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "test_helpers.test_clock";
  /**
   * The status of the Test Clock.
   */
  status: "advancing" | "internal_failure" | "ready";
  statusDetails: BillingClocksResourceStatusDetailsStatusDetails;
};

/**
 * @internal
 * TestHelpersTestClock without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelpersTestClock = {
  created: number;
  deletes_after: number;
  frozen_time: number;
  id: string;
  livemode: boolean;
  name?: string | null | undefined;
  object: "test_helpers.test_clock";
  status: "advancing" | "internal_failure" | "ready";
  status_details: External$BillingClocksResourceStatusDetailsStatusDetails;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelpersTestClock
 */
const SchemaIn$TestHelpersTestClock: z.ZodType<
  TestHelpersTestClock, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    deletes_after: z.number().int(),
    frozen_time: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    name: z.string().nullable().optional(),
    object: z.enum(["test_helpers.test_clock"]),
    status: z.enum(["advancing", "internal_failure", "ready"]),
    status_details: Schemas$BillingClocksResourceStatusDetailsStatusDetails.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      deletes_after: "deletesAfter",
      frozen_time: "frozenTime",
      id: "id",
      livemode: "livemode",
      name: "name",
      object: "object",
      status: "status",
      status_details: "statusDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelpersTestClock
 */
const SchemaOut$TestHelpersTestClock: z.ZodType<
  External$TestHelpersTestClock, // output type of this zod object
  z.ZodTypeDef,
  TestHelpersTestClock // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    deletesAfter: z.number().int(),
    frozenTime: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    name: z.string().nullable().optional(),
    object: z.enum(["test_helpers.test_clock"]),
    status: z.enum(["advancing", "internal_failure", "ready"]),
    statusDetails: Schemas$BillingClocksResourceStatusDetailsStatusDetails.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      deletesAfter: "deletes_after",
      frozenTime: "frozen_time",
      id: "id",
      livemode: "livemode",
      name: "name",
      object: "object",
      status: "status",
      statusDetails: "status_details",
    });
  });

export const Schemas$TestHelpersTestClock = {
  in: SchemaIn$TestHelpersTestClock,
  out: SchemaOut$TestHelpersTestClock,
};
